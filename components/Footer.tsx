"use client";

interface LinkColumn {
  title: string;
  links: string[];
}

interface SecondaryColumn {
  title: string;
  lines: string[];
}

// Edit this data to swap in your own links/columns — the layout adapts automatically.
const linkColumns: LinkColumn[] = [
  {
    title: "Get to Know Us",
    links: ["About Us", "Careers", "Press Releases", "Our Blog"],
  },
  {
    title: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Our Platform",
      "Become a Partner",
      "Affiliate Program",
      "Advertise Your Products",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "Purchase Protection",
      "Help Centre",
    ],
  },
];

const secondaryColumns: SecondaryColumn[] = [
  { title: "Brand One", lines: ["Books, art", "& collectibles"] },
  { title: "Brand Two", lines: ["Scalable cloud", "computing services"] },
  { title: "Brand Three", lines: ["Stream millions", "of songs"] },
  { title: "Brand Four", lines: ["Movies, TV", "& shows"] },
];

const legalLinks: string[] = ["Terms of Use", "Privacy Notice", "Interest-Based Ads"];

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <button
        type="button"
        className="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>

      <div className="linksSection">
        <div className="linksGrid">
          {linkColumns.map((col) => (
            <div key={col.title} className="linkColumn">
              <h3 className="columnTitle">{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="brandSection">
        <div className="logo">Amazon</div>
        <div className="selectors">
          <button type="button" className="selectorButton">
            🌐 English
          </button>
          <button type="button" className="selectorButton">
            🇮🇳 India
          </button>
        </div>
      </div>

      <div className="divider" />

      <div className="secondarySection">
        <div className="secondaryGrid">
          {secondaryColumns.map((col) => (
            <div key={col.title} className="secondaryColumn">
              <span className="secondaryTitle">{col.title}</span>
              {col.lines.map((line) => (
                <span key={line} className="secondaryLine">
                  {line}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="legalBar">
        <div className="legalLinks">
          {legalLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #131a22;
          color: #ddd;
          font-size: 14px;
        }

        .backToTop {
          width: 100%;
          display: block;
          text-align: center;
          background-color: #232f3e;
          color: #fff;
          border: none;
          padding: 14px 0;
          font-size: 13px;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .backToTop:hover {
          background-color: #2e3e51;
        }

        .linksSection {
          background-color: #131a22;
          padding: 40px 24px;
        }

        .linksGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .linkColumn ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .columnTitle {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
        }

        .linkColumn li {
          margin-bottom: 8px;
        }

        .linkColumn a {
          color: #ddd;
          text-decoration: none;
        }

        .linkColumn a:hover {
          text-decoration: underline;
        }

        .divider {
          border-top: 1px solid #3a4553;
        }

        .brandSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 32px 24px;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
        }

        .selectors {
          display: flex;
          gap: 12px;
        }

        .selectorButton {
          background-color: transparent;
          border: 1px solid #6b7785;
          color: #ddd;
          border-radius: 4px;
          padding: 6px 14px;
          font-size: 13px;
          cursor: pointer;
        }

        .selectorButton:hover {
          border-color: #fff;
          color: #fff;
        }

        .secondarySection {
          background-color: #0f1622;
          padding: 32px 24px;
        }

        .secondaryGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .secondaryColumn {
          display: flex;
          flex-direction: column;
        }

        .secondaryTitle {
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .secondaryLine {
          color: #8c97a3;
          font-size: 13px;
          line-height: 1.4;
        }

        .legalBar {
          background-color: #0f1622;
          padding: 20px 24px 32px;
          text-align: center;
        }

        .legalLinks {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }

        .legalLinks a {
          color: #8c97a3;
          text-decoration: none;
          font-size: 12px;
        }

        .legalLinks a:hover {
          text-decoration: underline;
        }

        .copyright {
          color: #8c97a3;
          font-size: 12px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .linksGrid,
          .secondaryGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .linksGrid,
          .secondaryGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}