import "./kategorien.css"; // You can create this CSS file for styling



function Kategorien() {
  return (
     <div className="kategorien">
      <button className="kategorien-button">Kategorien</button>
     <ul className="kategorien-menu">
        
       <li>Romane</li>
        <li>Kinderbücher</li>
      <li>Kochbücher</li>
        <li>Lehrbücher</li>

      </ul>
    </div> 

  // <div className="container mx-auto text-center">
  //         <h2 className="text-3xl font-extrabold mb-8">Categories</h2>
  //         {/* Category cards using Daisy UI components */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //           {/* Romantic Category */}
  //           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  //             <img src="romantic-category-image.jpg" alt="Romantic Category" className="w-full h-56 object-cover" />
  //             <div className="p-4">
  //               <h3 className="text-2xl font-semibold text-primary">Romantic</h3>
  //               <div className="mt-4">
  //                 <a href="#" className="btn-primary text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out">Explore</a>
  //               </div>
  //             </div>
  //           </div>
  // </div> </div>
  
  );
}


export default Kategorien;
{/* // <div className="kategorien">
    //   <button className="kategorien-button">Kategorien</button>
    //   <ul className="kategorien-menu">
        
    //     <li>Romane</li>
    //     <li>Kinderbücher</li>
    //     <li>Kochbücher</li>
    //     <li>Lehrbücher</li>

    //     {/* Add more categories here */}
    {/* //   </ul>
    // </div>  */}