export async function getVans() {

    const res = await fetch("tino-vanlife-project.netlify.app/api/vans");
    if (!res.ok) {
        const error = new Error("hell no");
        error.statusText = res.statusText;
        error.status = res.status;

        throw error;
    }
    const data = await res.json();
    return data.vans;
}