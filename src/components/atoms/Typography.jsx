/**
 * Renders a typography component with the specified text, class name, and font weight.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @param {string} props.text - The text to be displayed.
 * @param {string} [props.className] - An optional class name to be applied to the component.
 * @param {string} [props.weight] - The font weight of the text, defaults to "light".
 * @returns {React.ReactElement} - The rendered typography component.
 */
export default function Typography({ text, className, id }) {
  return (
    <p className={` ${className}  `} id={id}>
      {text}
    </p>
  );
}
