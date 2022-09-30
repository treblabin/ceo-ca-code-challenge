import ReactDOM from "react-dom/client";
import App from "./App";
import ReportWebVitals from "./ReportWebVitals";
import { Provider } from "react-redux";
import { store } from "./shared/redux/Store";
import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
