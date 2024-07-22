const paintings = [
    {
      id: 1,
      title: "Star paint",
      color: ["red", "blue", "green"] ,
      Litros: [5,10,20],
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
      stock:15,
      description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
      Tipo: "Esmaltes",
      Precio:15000
    },
    {
        id: 2,
        title: "Latex",
        color: ["red","blue","green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Esmaltes",
    },
    {
        id: 3,
        title: "ColorFull",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Impermeables",
        Precio:15000
    },
    {
        id: 4,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Esmaltes",
        Precio:15000
      },
      {
          id: 5,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Esmaltes",
          Precio:15000
      },
      {
          id: 6,
          title: "ColorFull",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Esmaltes",
          Precio:15000
      },
      {
        id: 7,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Esmaltes",
        Precio:19000
      },
      {
          id: 8,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Esmaltes",
          Precio:15000
      },
      {
          id: 9,
          title: "ColorFull",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Esmaltes",
          Precio:10000
      },
      {
        id: 10,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Esmaltes",
        Precio:15000
      },
      {
          id:11,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Impermeables",
          Precio:8000
      },
      {
          id: 12,
          title: "ColorFull",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Impermeables",
          Precio:15000
      },
      {
        id: 13,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Impermeables",
        Precio:15000
      },
      {
          id: 14,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Impermeables",
          Precio:7000
      },
      {
          id: 15,
          title: "ColorFull",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Impermeables",
          Precio:15000
      }, {
        id: 16,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Impermeables",
        Precio:15000
      },
      {
          id: 17,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Latex",
          Precio:15000
      },
      {
          id: 18,
          title: "ColorFull",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Latex",
          Precio:15000
      },{
        id: 19,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Latex",
        Precio:15000
      },
      {
          id: 20,
          title: "Latex",
          color: ["red", "blue", "green"] ,
          Litros: [5,10,20],
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
          stock:15,
          description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
          Tipo: "Latex",
          Precio:15000
      },
    // Agrega más pinturas aquí
  ];
  
  export default paintings;