AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.comicsContainer = this.el;   
      this.createPosters();
    },

    createPosters: function () {
        const postersRef = [
          {
            id: "avengers",
            title: "The Avengers",
            url: "./assets/avengers.jpg",
          },
          {
            id: "black-panther",
            title: "Black Panther",
            url: "./assets/black-panther.jpg",
          },
          {
            id: "spider-man",
            title: "Spider Man",
            url: "./assets/spider-man.jpg",
          },
          {
            id: "thor",
            title: "Thor: God of Thunder",
            url: "./assets/thor.jpg",
          },
        ];
        
        let prevoiusXPosition = -70;
    
        for (var item of postersRef) {
          const posX = prevoiusXPosition + 30;
          const posY = 25;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          // Border Element
          const borderEl = this.createBorder(position, item.id);
    
          // Thumbnail Element
          const cover = this.createCover(item);
          borderEl.appendChild(cover);
    
          // Title Text Element
          const titleEl = this.createTitleEl(position, item);
          borderEl.appendChild(titleEl);
    
          this.comicsContainer.appendChild(borderEl);
        }
      },

      createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 21.5,
            height: 30.5
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#ffffff",
          opacity: 1,
        });
        entityEl.setAttribute("cursor-listener", {})
        
        return entityEl;
      },

    createCover: function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("position", {x: 0, y: 0, z:0.1});
        entityEl.setAttribute("material", {src: item.url});

        return entityEl;
    },

    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#0F184E",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
      },
  
})