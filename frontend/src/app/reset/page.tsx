"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ResetPage = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.clear();
        router.push('/start');
    }, [router]);

    return null;
};

export default ResetPage;