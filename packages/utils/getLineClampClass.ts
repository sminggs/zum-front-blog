export function getLineClampClass(maxLines: number): string {
  switch (maxLines) {
    case 1:
      return 'line-clamp-1';
    case 2:
      return 'line-clamp-2';
    case 3:
      return 'line-clamp-3';
    // Add more cases as needed
    default:
      return '';
  }
}
