// // // import React from 'react';

// // // function MyPage() {
// // //   const widgetHtml = `
// // //   <script type="text/javascript">if(typeof checkLibExist == "undefined"){var script = document.createElement("script");script.src ="//www.bod.de/public/js/bod/v1.1/shopWidget.min.js";script.type = "text/javascript";document.head.appendChild(script);var checkLibExist = true;}if(typeof books === "undefined") var books=[];books.push({"objID":"3337720","swKey":"b7df79e2a4d83b0f2b448867c3cf567f","type":"print","size":"large","font":"serif","shadow":true,"contour":true,"coverContour":false,"fontColor":"#000000","contourColor":"#000000","shadowBtn":true,"contourBtn":false,"bgColor":"#ffffff","btnFontColor":"#ffffff","btnColor":"#e84e0f","btnContourColor":"#e84e0f","shop":"de","mandantShopUrl":"https://buchshop.bod.de","lang":"de"});</script>
  
// // //   `;
  
// // //   return (
// // //     <>
// // //     <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />
// // //     <div id="bodShopWidget_3957865_print" className="bodShopWidget" /> 
    
// // //   </>
// // //   );
// // // }

// // // export default MyPage;

// // // components/BodShopWidget.js
// // import { useEffect } from 'react';

// // const BookShopWidget = () => {
// //   useEffect(() => {
// //     // Check if the script is already loaded to avoid duplicate loads
// //     if (typeof window !== "undefined" && typeof window.checkLibExist === "undefined") {
// //       const script = document.createElement("script");
// //       script.src = "//www.bod.de/public/js/bod/v1.1/shopWidget.min.js";
// //       script.type = "text/javascript";
// //       script.async = true;
// //       document.head.appendChild(script);
// //       window.checkLibExist = true; // Mark as loaded
// //     }

// //     // Define the books array and add the book object
// //     if (typeof window.books === "undefined") window.books = [];
// //     window.books.push({
// //       objID: "3957865",
// //       swKey: "a53aac97ab5ee800d746781dbdd9131c",
// //       type: "print",
// //       size: "large",
// //       font: "serif",
// //       shadow: true,
// //       contour: true,
// //       coverContour: true,
// //       fontColor: "#000000",
// //       contourColor: "#000000",
// //       shadowBtn: true,
// //       contourBtn: false,
// //       bgColor: "#ffffff",
// //       btnFontColor: "#ffffff",
// //       btnColor: "#e84e0f",
// //       btnContourColor: "#E61CC5",
// //       shop: "de",
// //       mandantShopUrl: "https://buchshop.bod.de",
// //       lang: "de"
// //     });
// //   }, []);

// //   return <div id="bodShopWidget_3957865_print" className="bodShopWidget"></div>;
// // };

// // export default BookShopWidget;
// // components/BodShopWidget.js
// // components/BodShopWidget.js
// import { useEffect } from 'react';

// const BookShopWidget = () => {
//   useEffect(() => {
//     const loadScript = () => {
//       if (typeof window !== "undefined" && typeof window.checkLibExist === "undefined") {
//         console.log("Lade das Bod-Skript...");

//         const script = document.createElement("script");
//         script.src = "//www.bod.de/public/js/bod/v1.1/shopWidget.min.js";
//         script.type = "text/javascript";
//         script.async = true;

//         script.onload = () => {
//           console.log("Bod-Skript erfolgreich geladen.");
          
//           // Stelle sicher, dass das globale Objekt books vorhanden ist
//           if (typeof window.books === "undefined") window.books = [];
//           window.books.push({
//             objID: "3957865",
//             swKey: "a53aac97ab5ee800d746781dbdd9131c",
//             type: "print",
//             size: "large",
//             font: "serif",
//             shadow: true,
//             contour: true,
//             coverContour: true,
//             fontColor: "#000000",
//             contourColor: "#000000",
//             shadowBtn: true,
//             contourBtn: false,
//             bgColor: "#ffffff",
//             btnFontColor: "#ffffff",
//             btnColor: "#e84e0f",
//             btnContourColor: "#E61CC5",
//             shop: "de",
//             mandantShopUrl: "https://buchshop.bod.de",
//             lang: "de"
//           });

//           // Füge eine zusätzliche Funktion zur Initialisierung des Widgets hinzu
//           if (typeof window.initializeShopWidgets === "function") {
//             console.log("Initialisiere das Widget...");
//             window.initializeShopWidgets();
//           } else {
//             console.log("Funktion 'initializeShopWidgets' ist nicht verfügbar.");
//           }
//         };

//         script.onerror = () => {
//           console.error("Fehler beim Laden des Bod-Skripts.");
//         };

//         document.head.appendChild(script);
//         window.checkLibExist = true; // Verhindere mehrfaches Laden
//       }
//     };

//     loadScript();
//   }, []);

//   return <div id="bodShopWidget_3957865_print" className="bodShopWidget"></div>;
// };

// export default BookShopWidget;


import React from "react";

const BookShopWidget = () => {
  return (
    <iframe
    src="/Nachkommen.html"
    style={{ width: '100%', height: '600px', border: 'none' }}
    sandbox="allow-scripts allow-same-origin"
  />
  );
};

export default BookShopWidget;


