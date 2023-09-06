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

        {/* Add more categories here */}
      </ul>
    </div>
  );
}


export default Kategorien;
