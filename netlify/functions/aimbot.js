exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { config } = data;

    // Configurações de Registry para Free Fire
    const registryConfig = {
      freeFire: {
        precision: "define.touch.precision_com.dts.freefireth.FFMainActivity",
        velocity: "define.touch.velocity_com.dts.freefireth.FFMainActivity"
      },
      freeFireMax: {
        precision: "define.touch.precision_com.dts.freefiremax.FFMainActivity",
        velocity: "define.touch.velocity_com.dts.freefiremax.FFMainActivity"
      },
      regedit: {
        version: "Regedit.Plus.Activated.10+8_AJUSTABLE_FIX.ITEMSIZE=100%_SCALE=1-TO-1_06-OF-11",
        mouse: {
          ActiveWindowTracking: "dword:00000001",
          Beep: "No",
          DoubleClickHeight: "2",
          DoubleClickSpeed: "300",
          MouseHoverHeight: "200",
          MouseHoverTime: "0",
          MouseHoverWidth: "4",
          MouseSensitivity: "4",
          MouseSpeed: "0",
          MouseThreshold1: "3",
          MouseThreshold2: "11",
          MouseTrails: "0",
          DoubleClickHeight2: "0,8",
          DoubleClickSpeed2: "0,45",
          DoubleClickWidth2: "0,3"
        },
        bluestacks: {
          CPU: "dword:00000064",
          DPI: "dword:000000a0",
          Fov: "dword:0020f580",
          generalemulatorsensitivity: `dword:${config.precisao ? config.precisao.toString(16).padStart(8, '0') : '00000034'}`,
          GPU: "dword:00000064",
          joystick: "dword:00000328",
          LEFTCLICK: "dword:000003e8",
          sensitivity: `dword:${config.precisao ? config.precisao.toString(16).padStart(8, '0') : '00000034'}`,
          SMALLESTWIDHT: "dword:000002ee",
          speedofmovement: "dword:00000054",
          touchsensitivyty: "dword:000001c1"
        },
        smartgaga: {
          CPU: "dword:00000064",
          DPI: "dword:000000a0",
          Fov: "dword:0020f580",
          generalemulatorsensitivity: "dword:00000064",
          GPU: "dword:00000064",
          joystick: "dword:000003e8",
          LEFTCLICK: "dword:000001e2",
          sensitivity: "dword:00000064",
          SMALLESTWIDHT: "dword:000001ee",
          speedofmovement: "dword:00000064",
          touchsensitivyty: "dword:000001c1"
        }
      },
      config: config
    };

    console.log('Injetando configurações:', registryConfig);

    // AQUI VOCÊ VAI INTEGRAR COM SUA API REAL DE INJEÇÃO
    // Exemplo:
    // const apiResponse = await fetch('SUA_API_DE_INJECAO', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(registryConfig)
    // });

    const response = {
      success: true,
      message: 'Configurações injetadas com sucesso no Free Fire',
      data: registryConfig,
      timestamp: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };

  } catch (error) {
    console.error('Erro ao injetar:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Erro ao injetar',
        message: error.message 
      })
    };
  }
};
