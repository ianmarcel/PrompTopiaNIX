import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// import "@styles/globals.css";

// import { Children } from "react/cjs/react.development";
// import { Children } from "react/cjs/react.production.min";

export const metaData = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
