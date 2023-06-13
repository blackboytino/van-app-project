export async function getVans() {

    const res = await fetch("/api/vans");
    if (!res.ok) {
        const error = new Error("hell no");
        error.statusText = res.statusText;
        error.status = res.status;

        throw error;
    }
    const data = await res.json();
    return data.vans;
}