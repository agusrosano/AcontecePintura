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
      }, {
        id: 16,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Impermeables",
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
      },{
        id: 19,
        title: "Star paint",
        color: ["red", "blue", "green"] ,
        Litros: [5,10,20],
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_991802-MLA52406191567_112022-O.webp",
        stock:15,
        description: "A depiction of the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
        Tipo: "Latex",
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
      },
    // Agrega más pinturas aquí
  ];
  
  export default paintings;