type SecondaryTitleProps = {
  title: string;
  subtitle?: string;
}

const SecondaryTitle = ({title, subtitle}: SecondaryTitleProps) => {
  return (
    <div className="flex flex-col text-center mb-3">
      <h2 className="text-center text-lg font-bold">{title}</h2>
      <h3 className="text-center mb-2">{subtitle}</h3>
    </div>
  )
}

export default SecondaryTitle