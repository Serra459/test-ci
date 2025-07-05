function sortByHealth(heroes) {
    return [...heroes].sort((a, b) => b.health - a.health);
}

export default sortByHealth