// // Sidebar.js
// import React from "react";

// const menu = [
//   { label: "Loan Prediction", icon: "🏦" },
//   { label: "About", icon: "ℹ️" },
//   { label: "FAQ", icon: "❓" },
//   { label: "Contact", icon: "✉️" },
// ];

// export default function Sidebar({ selected, setSelected }) {
//   return (
//     <aside className="pm-sidebar">
//       <nav>
//         {menu.map((item) => (
//           <div
//             key={item.label}
//             className={`pm-menu-item ${
//               selected === item.label ? "active" : ""
//             }`}
//             onClick={() => setSelected(item.label)}
//           >
//             <span className="pm-menu-icon">{item.icon}</span>
//             <span>{item.label}</span>
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// }






// Sidebar.jsx
import React from "react";

const menu = [
  { label: "Home", icon: "🏠" },
  { label: "Loan Prediction", icon: "🏦" },
  { label: "About", icon: "ℹ️" },
  { label: "FAQ", icon: "❓" },
  { label: "Contact", icon: "✉️" },
];

export default function Sidebar({ selected, setSelected }) {
  return (
    <aside className="pm-sidebar">
      <nav>
        {menu.map((item) => (
          <div
            key={item.label}
            className={`pm-menu-item ${
              selected === item.label ? "active" : ""
            }`}
            onClick={() => setSelected(item.label)}
          >
            <span className="pm-menu-icon">{item.icon}</span>
            <span className="pm-menu-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
