"use client"

import { useEffect } from 'react';

 function  BootstrapClient() {
  useEffect(() => {
  require('/utils/theme.js');
  }, []);

  return null;
}

export default BootstrapClient;