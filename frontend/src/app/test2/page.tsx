'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { Button } from '@/components/ui/button';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
});

const MermaidDiagram = () => {
  const diagramRef = useRef(null);

  const diagramDefinition = `
    sequenceDiagram
      box Freight Forwarder
      participant N1 as ne-one-simulate (FWD)
      participant FWD as FWD 1R Server
      end
      box Carrier
      participant C as Carrier 1R Server
      participant N2 as ne-one-simulate (Carrier)
      end
      
      N1->>+FWD: subscribe Carrier 1R server to FF's Waybill #123
      FWD-->-N1: 201 Created SubscriptionRequest

      N1->>+FWD: create ShipmentRecord #123    
      FWD-->>-N1: 201 Created ShipmentRecord

      %% FWD->>C: send Notification LOGISTICS_OBJECT_CREATED            
      
      loop
          N2->>C: check Notifications Inbox     
      end

      N2->>FWD: Change Route-Origin (ChangeRequest)  
      FWD-->>N2: 201 Created ChangeRequest

      N1->>FWD: Accept ChangeRequest

      %% FWD->>C: send Notification LOGISTICS_OBJECT_UPDATED

      loop
          N2->>C: check Notifications Inbox     
      end

      N2->>FWD: get ShipmentRecord
      FWD-->>N2: 200 OK

      N2->>N2: check if Latest-Revision is 2
  `;

  useEffect(() => {
    if (diagramRef.current) {
      // Render the Mermaid diagram
      mermaid.contentLoaded();
      // Allow time for the SVG to render before styling
      
      setTimeout(() => {        
        const svg = diagramRef.current.querySelector('svg');        
        if (svg) {            
          // Select message text elements (Mermaid renders these within a group with class "message")
          const messageTexts = svg.querySelectorAll('.messageText');          
          messageTexts.forEach(textEl => {            
            const text = textEl.textContent.trim();
            console.log(text);
            // Check if the text contains an HTTP success status code (200-299)
            if (text.match(/\b20[0-9]\b/)) {
              textEl.style.fill = 'green';
            // red if 4xx or 5xx
            } else if (text.match(/\b4[0-9][0-9]\b|\b5[0-9][0-9]\b/)) {
              textEl.style.fill = 'red';
            } else {
                //else gray
              textEl.style.fill = 'gray';
            }
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div ref={diagramRef}>
        <Button>Click me</Button>
      <div className="mermaid">
        {diagramDefinition}
      </div>
    </div>
  );
};

export default MermaidDiagram;
