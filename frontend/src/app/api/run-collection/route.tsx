import { NextResponse } from 'next/server';
import * as newman from 'newman';
import path from 'path';

export async function GET() {
  try {
    return new Promise((resolve, reject) => {
      newman.run({
        collection: path.join(process.cwd(), 'users', 'newman', 'collection.json'),
        reporters: ['json'],
      }, (err, summary) => {
        if (err) {
          reject(NextResponse.json({ error: err.message }, { status: 500 }));
        }
        
        const results = {
          stats: summary.run.stats,
          failures: summary.run.failures,
          timings: summary.run.timings,
          executions: summary.run.executions.map(exec => ({
            name: exec.item.name,
            status: exec.response.code,
            time: exec.response.responseTime,
            failed: exec.assertions?.some(a => a.error) || false,
            assertions: exec.assertions?.map(a => ({
              name: a.assertion,
              failed: !!a.error,
              error: a.error?.message
            }))
          }))
        };
        
        resolve(NextResponse.json(results));
      });
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}