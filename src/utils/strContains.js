const strContains = (str1, str2) => {
    const lowerCaseStr1 = str1.toLowerCase();
    const lowerCaseStr2 = str2.toLowerCase();
    return lowerCaseStr1.includes(lowerCaseStr2);
}

// Eksport funkcji, aby była dostępna z zewnątrz modułu
export default strContains;