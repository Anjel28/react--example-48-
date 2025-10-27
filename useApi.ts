import { useState, useEffect } from 'react';

export function useApi<T, P = void>(
    apiFunc: (params: P) => Promise<{success: boolean; data: T; error?: string}>

) {
    const [data,setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); 
}