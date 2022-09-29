import { Container, UL, LI, Span, Anchor } from "./Styles";

const BreadCrumb = ({ activeLinks }) => {
  const breadCrumbs = [
    {
      key: 1,
      name: "Delivery",
    },
    {
      key: 2,
      name: "Payment",
    },
    {
      key: 3,
      name: "Finish",
    },
  ];
  return (
    <Container>
      <UL>
        {breadCrumbs.map((value) => {
          const isActive = activeLinks.includes(value.key);
          if (isActive)
            return (
              <LI key={value.key}>
                <Span active>{value.key}</Span>
                <Anchor>{value.name}</Anchor>
              </LI>
            );
          return (
            <LI key={value.key}>
              <Span>{value.key}</Span>
              <Anchor>{value.name}</Anchor>
            </LI>
          );
        })}
      </UL>
    </Container>
  );
};

export default BreadCrumb;
