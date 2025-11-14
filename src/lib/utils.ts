// Helper to format bytes
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export const calculatePagination = (
  total: number,
  limit: number,
  offset: number
) => {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  const hasMore = offset + limit < total;

  return {
    total,
    limit,
    offset,
    has_more: hasMore,
    current_page: currentPage,
    total_pages: totalPages,
  };
}
