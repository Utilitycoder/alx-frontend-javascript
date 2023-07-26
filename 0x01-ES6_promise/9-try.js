const appendMessage = 'Guardrail was processed';
export default function quadrail(mathFunction) {
  const array = [];
  try {
    array.push(mathFunction());
  } catch (error) {
    array.push(error.toString());
  } finally {
    array.push(appendMessage);
  }

  return array;
}
