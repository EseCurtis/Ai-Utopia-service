export const generateExample = (value: string): string => {
    return `
    {
        "status": 200,
        "accuracy": percentage,
        "value": ${value}
    }
    `
}