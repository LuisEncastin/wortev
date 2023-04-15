import React, { useState, useContext } from 'react';

// Theme colors context
const themeContext = React.createContext();

function Layout(props) {

  const pinkBackground = {
    themeName: "pinkBackground",
    backgroundColor: "#FBDA61",
    backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"
  }

  const blueBackground = {
    themeName: "blueBackground",
    backgroundColor: "#0088ff",
    backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #0088ff 100%)"
  }

  const [theme, setTheme] = useState(pinkBackground);

  //Function that updates the colors in the theme
  function updateTheme() {
    if(theme.themeName === "pinkBackground"){
        setTheme(blueBackground);        
    }
    if(theme.themeName === "blueBackground"){
        setTheme(pinkBackground);        
    }

  }

  return (
    <themeContext.Provider value={{ theme, updateTheme }}>
      {props.children}
    </themeContext.Provider>
  );
}

// Hook to access the theme context
function useTheme() {
  const context = useContext(themeContext);
  return context;
}

// Export the Layout component and the useColores hooks
export { Layout, useTheme };
