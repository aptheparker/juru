import Link from "next/link";
import Template1 from "@/data/template1.json";
import Template2 from "@/data/template2.json";

export default function TemplatePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Templates</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/board-page",
              query: { boardData: JSON.stringify(Template1) },
            }}
            legacyBehavior
          >
            <a className="text-blue-500">Start with Template 1</a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/board-page",
              query: { boardData: JSON.stringify(Template2) },
            }}
            legacyBehavior
          >
            <a className="text-blue-500">Start with Template 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
