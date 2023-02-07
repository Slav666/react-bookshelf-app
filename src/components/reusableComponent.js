import styled from "@emotion/styled";
import { Dialog as ReachDialog } from "@reach/dialog";

const ButtonsVariant = {
  primary: {
    backgroundColor: "#87CEEB",
    color: "#5A5A5A",
  },
  secondary: {
    backgroundColor: "#F5E216",
    color: "black",
  },
};

const Button = styled.button(
  {
    padding: "10px 15px",
    border: "0",
    lineHeight: "1",
    borderRadius: "3px",
  },
  ({ variant = "primary" }) => ButtonsVariant[variant]
);

const Input = styled.input({
  borderRadius: "3px",
  border: "1px solid #f1f1f4",
  background: "#f1f2f7",
  padding: "8px 12px",
});

const CircleButton = styled.button({
  borderRadius: "30px",
  padding: "0",
  width: "40px",
  height: "40px",
  lineHeight: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#FFCCCB",
  color: "#434449",
  border: `1px solid #f1f1f4`,
  cursor: "pointer",
});

const Dialog = styled(ReachDialog)({
  maxWidth: "450px",
  borderRadius: "3px",
  paddingBottom: "3.5em",
  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
  margin: "20vh auto",
  "@media (max-width: 991px)": {
    width: "100%",
    margin: "10vh auto",
  },
});

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

export { Button, Input, CircleButton, Dialog, FormGroup };