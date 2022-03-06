import "./App.css";

export function ErrorMessage({message}) {
    return message ? ( <p className="Error">{message}</p> ) : <></>;
}
