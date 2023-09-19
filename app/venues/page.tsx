'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Retool from 'react-retool';

export default function EmbedApp() {
  const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    const fetchEmbedUrl = async () => {
      try {
        const response = await axios.get(
          'https://api.retool.com/v1/workflows/92d4319d-9665-4775-9412-9f7be190740c/startTrigger?workflowApiKey=retool_wk_f1e5a47aa6c94d8cb18299952bd4e425',
        );

        if (response.status === 200) {
          console.log(response.data);
          setEmbedUrl(response.data);
        } else {
          console.log('Er is een fout opgetreden bij het ophalen van de EmbedURL.');
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmbedUrl();
  }, []);

  return (
      <Retool url={embedUrl}/>
  );
}
