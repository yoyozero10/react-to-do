import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
const error = useRouteError();
console.error(error);
return (
<div id="error-page">
<h1>Oops!</h1>
<p>Không xong rồi đại vương ơi.</p>
<p>
<i>{error.statusText || error.message}</i>
</p>
<div>
    <Link to="/">Về nhà thôi</Link>
</div>
</div>
);
}