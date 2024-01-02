import { LinkArea, LinkIcon } from "./MenuItem.styled";
export default function MenuItem({ link, icon }) {
  return (
    <>
      <LinkArea to={link}>
        <LinkIcon>{icon}</LinkIcon>
      </LinkArea>
    </>
  );
}
