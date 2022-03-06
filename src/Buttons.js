import './App.css';

export function Button({title="OK", onClick, className, type="button"}) {
  className = "button " + className;
  return (
    <input className={className} type={type} value={title} onClick={onClick} />
  );
}

export function ButtonPrimary({title, onClick, type}) {
  return Button({title, onClick, type, className: "buttonPrimary" });
}

export function ButtonSecondary({title, onClick}) {
  return Button({title, onClick, className: "buttonSecondary"});
}

export function ButtonSuccess({title, onClick}) {
  return Button({title, onClick, className: "buttonSuccess"});
}

export function ButtonDanger({title, onClick}) {
  return Button({title, onClick, className: "buttonDanger"});
}

export function ButtonWarning({title, onClick}) {
  return Button({title, onClick, className: "buttonWarning"});
}

export function ButtonInfo({title, onClick}) {
  return Button({title, onClick, className: "buttonInfo"});
}

export function ButtonLight({title, onClick}) {
  return Button({title, onClick, className: "buttonLight"});
}

export function ButtonDark({title, onClick}) {
  return Button({title, onClick, className: "buttonDark"});
}

export function ButtonLink({title, onClick}) {
  return Button({title, onClick, className: "buttonLink"});
}
