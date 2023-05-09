import { component$ } from "@builder.io/qwik";
import Moderator from "./moderator";

export type BadgeVariant = "moderator" | "subscriber" | "vip" | "broadcaster";

interface Props {
  variant?: BadgeVariant;
}

export default component$<Props>((props) => {
  switch (props.variant) {
    case "moderator":
      return <Moderator />;
    default:
      return null;
  }
});
