export default function DynamicRoute({ params }: any) {
  const { dynamic } = params;
  return (
    <div>
      <p>params{dynamic}</p>
    </div>
  );
}
