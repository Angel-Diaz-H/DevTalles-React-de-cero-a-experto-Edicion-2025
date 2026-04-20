interface Props {
  title: string;
  description?: string;
}

export const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
          {title}
        </h1>

        {description && <p className="text-lg text-gray-600">{description}</p>}
      </div>
    </div>
  );
};
