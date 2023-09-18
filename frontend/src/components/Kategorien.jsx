import "./kategorien.css"; // You can create this CSS file for styling



function Kategorien() {
  return (
    <div className="kategorien">
      <button className="kategorien-button">Kategorien</button>
      <ul className="kategorien-menu">
        <span className="text-error">

        <li>Romane</li>
        <li>Kinderbücher</li>
        <li>Kochbücher</li>
        <li>Lehrbücher</li></span>

        {/* Add more categories here */}
      </ul>
    </div>
  );
}


export default Kategorien;
