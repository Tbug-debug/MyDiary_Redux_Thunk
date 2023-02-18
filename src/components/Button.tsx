interface DeleteBtn<T> {
  btn?: () => T;
  children: string;
}

function Button<T>(props: DeleteBtn<T>) {
  return <button onClick={props.btn}>{props.children}</button>;
}

export default Button;
