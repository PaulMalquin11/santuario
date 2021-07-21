var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrs",
      "name": "Atrás",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -1.1532897337982,
        "pitch": 0.13622781094614034,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-altar",
      "name": "Altar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.486878675717616,
          "pitch": 0.02044518535372042,
          "rotation": 0,
          "target": "0-atrs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4044341894986303,
        "pitch": -0.026577398399147967,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -1.4907742239296304,
          "pitch": 0.007270420186861415,
          "rotation": 0,
          "target": "1-altar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Santuario Nuestra Señora de la Purificación",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
