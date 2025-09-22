'use client';

import { useState, useMemo, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from './Button';

const tableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: 'border-collapse',
      striped: 'border-collapse',
      bordered: 'border border-gray-200 border-collapse',
    },
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface Column<T = Record<string, unknown>> {
  key: string;
  title: string;
  dataIndex?: keyof T;
  render?: (value: unknown, record: T, index: number) => ReactNode;
  sorter?: boolean | ((a: T, b: T) => number);
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface DataTableProps<T = Record<string, unknown>>
  extends VariantProps<typeof tableVariants> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    onChange?: (page: number, pageSize: number) => void;
  };
  rowKey?: keyof T | ((record: T) => string);
  onRow?: (
    record: T,
    index: number
  ) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
    className?: string;
  };
  emptyText?: string;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  onClick?: () => void;
  colSpan?: number;
}

export function DataTable<T = Record<string, unknown>>({
  data,
  columns,
  variant,
  size,
  className,
  loading = false,
  pagination,
  rowKey = (record: T) => (record as any).id || String(Math.random()),
  onRow,
  emptyText = 'No data available',
  scroll,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return String(record[rowKey] || index);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const { key, direction } = sortConfig;
    const column = columns.find(col => col.key === key);

    if (!column?.sorter) return data;

    return [...data].sort((a, b) => {
      if (typeof column.sorter === 'function') {
        const result = column.sorter(a, b);
        return direction === 'desc' ? -result : result;
      }

      const aValue = column.dataIndex ? a[column.dataIndex] : a;
      const bValue = column.dataIndex ? b[column.dataIndex] : b;

      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig, columns]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const { current, pageSize } = pagination;
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, pagination]);

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sorter) return;

    setSortConfig(current => {
      if (current?.key === columnKey) {
        if (current.direction === 'asc') {
          return { key: columnKey, direction: 'desc' };
        } else {
          return null;
        }
      }
      return { key: columnKey, direction: 'asc' };
    });
  };

  const renderCell = (column: Column<T>, record: T, index: number) => {
    if (column.render) {
      return column.render(
        column.dataIndex ? record[column.dataIndex] : record,
        record,
        index
      );
    }
    return column.dataIndex ? String(record[column.dataIndex] || '') : '';
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig?.key === columnKey) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return '↕';
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="animate-pulse">
          <div className="mb-2 h-10 rounded bg-gray-200"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-1 h-12 rounded bg-gray-100"></div>
          ))}
        </div>
      </div>
    );
  }

  const tableContent = (
    <table className={cn(tableVariants({ variant, size }), className)}>
      <TableHeader>
        <TableRow className="border-b border-gray-200">
          {columns.map(column => (
            <TableCell
              key={column.key}
              align={column.align}
              width={column.width}
              className={cn(
                'bg-gray-50 px-4 py-3 font-medium text-gray-900',
                column.sorter && 'cursor-pointer select-none hover:bg-gray-100',
                column.className
              )}
              onClick={() => column.sorter && handleSort(column.key)}
            >
              <div className="flex items-center justify-between">
                <span>{column.title}</span>
                {column.sorter && (
                  <span className="ml-2 text-gray-400">
                    {getSortIcon(column.key)}
                  </span>
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedData.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="py-12 text-center text-gray-500"
            >
              {emptyText}
            </TableCell>
          </TableRow>
        ) : (
          paginatedData.map((record, index) => {
            const rowProps = onRow?.(record, index) || {};
            return (
              <TableRow
                key={getRowKey(record, index)}
                className={cn(
                  'border-b border-gray-100 hover:bg-gray-50',
                  variant === 'striped' && index % 2 === 1 && 'bg-gray-50',
                  rowProps.className
                )}
                onClick={rowProps.onClick}
                onDoubleClick={rowProps.onDoubleClick}
              >
                {columns.map(column => (
                  <TableCell
                    key={column.key}
                    align={column.align}
                    className={cn('px-4 py-3', column.className)}
                  >
                    {renderCell(column, record, index)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })
        )}
      </TableBody>
    </table>
  );

  return (
    <div className="w-full">
      {scroll ? (
        <div
          className="overflow-auto"
          style={{
            maxWidth: scroll.x,
            maxHeight: scroll.y,
          }}
        >
          {tableContent}
        </div>
      ) : (
        <div className="overflow-x-auto">{tableContent}</div>
      )}

      {pagination && (
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          showSizeChanger={pagination.showSizeChanger}
          pageSizeOptions={pagination.pageSizeOptions}
          onChange={pagination.onChange}
        />
      )}
    </div>
  );
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return <thead className={cn('bg-gray-50', className)}>{children}</thead>;
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody className={cn('divide-y divide-gray-100 bg-white', className)}>
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className,
  onClick,
  onDoubleClick,
}: TableRowProps) {
  return (
    <tr
      className={cn(onClick && 'cursor-pointer', className)}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className,
  align = 'left',
  width,
  onClick,
  colSpan,
}: TableCellProps) {
  const style = width ? { width } : undefined;

  return (
    <td
      className={cn(
        'text-gray-900',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        onClick && 'cursor-pointer',
        className
      )}
      style={style}
      onClick={onClick}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
}

interface PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
}

function Pagination({
  current,
  pageSize,
  total,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (current - 1) * pageSize + 1;
  const endIndex = Math.min(current * pageSize, total);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== current) {
      onChange?.(page, pageSize);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    const newPage = Math.min(
      Math.ceil((startIndex - 1) / newPageSize) + 1,
      Math.ceil(total / newPageSize)
    );
    onChange?.(newPage, newPageSize);
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(totalPages - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (current + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center text-sm text-gray-700">
        <span>
          Showing {startIndex} to {endIndex} of {total} results
        </span>
        {showSizeChanger && (
          <div className="ml-4 flex items-center">
            <span className="mr-2">Show</span>
            <select
              value={pageSize}
              onChange={e => handlePageSizeChange(Number(e.target.value))}
              className="rounded border border-gray-300 px-2 py-1 text-sm"
            >
              {pageSizeOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="ml-2">per page</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(current - 1)}
          disabled={current <= 1}
        >
          Previous
        </Button>

        {getVisiblePages().map((page, index) => (
          <Button
            key={index}
            variant={page === current ? 'primary' : 'outline'}
            size="sm"
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
            className="min-w-[32px]"
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(current + 1)}
          disabled={current >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DataTable;
