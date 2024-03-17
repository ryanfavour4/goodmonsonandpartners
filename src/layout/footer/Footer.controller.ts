import { useState } from "react";

export default function useFooter() {
    const [year] = useState(new Date().getFullYear());
    return { year };
}
