
const dataAccordion = [
  {
    tittle : "Nuevos lanzamientos",
    desc : "ofrecemos lo ultimo en videojuegos.",
  },
  {
    tittle : "Mira nuestras promociones",
    desc : "ofrecemos lo ultimo en videojuegos.",
  }
];

(function () {
  let ACCORDION = {
    init: function () {
      let _self = this;
      this.insertData(_self);
      this.eventhandler(_self);
    },
    insertData: function (_self) {
      dataAccordion.map(function (item, index) {
        document
          .querySelector(".main-accordion-container")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
      });
    },
    eventhandler: function (_self) {
      let arrayRefs = document.querySelectorAll(".accordion-tittle");
      for (i = 0; i < arrayRefs.length; i++) {
        arrayRefs[i].addEventListener("click", function (event) {
          // console.log("event: ", event);
          _self.showTab(event.target);
        });
      }
    },
    tplAccordionItem(item) {
      return `<div class = 'accordion-item'>
                <div class = 'accordion-tittle'><p>${item.tittle}</p></div>
                <div class = 'accordion-desc'><p>${item.desc}</p></div>
                </div>
                `;
    },

    showTab: function (refItem) {
      let activeTab = document.querySelector("tab-active");
      if (activeTab) {
        activeTab.classList.remove("tab-active");
    }
        console.log("Show tab :", refItem);
        refItem.parentElement.classList.toggle("tab-active");
    },
  };
  ACCORDION.init();
})();
