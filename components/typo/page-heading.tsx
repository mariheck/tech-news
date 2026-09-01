type PageHeadingProps = {
  children: React.ReactNode;
};

export const PageHeading = ({ children }: PageHeadingProps) => {
  return <h1 className='text-display mt-4 mb-8 text-balance'>{children}</h1>;
};
