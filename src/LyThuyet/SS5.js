/**
 * 1. Props
 * Giá trị truyền từ cha xuống con
 * Props không thay đổi được ở component con(read only)
 *
 * 2. Check prop type
 * pakage muốn dùng phải cài thêm
 * set isRequired nếu là bắt buộc có
 * nếu k bắt buộc phải set default giá trị mặc định
 *
 * 3. Render elements
 * sử dụng toán tử e ngôi binary operator
 * render mảng với loop, map
 *
 * 4. Cấu trúc file
 * folder components cho dùng chung các thành phần UI header, footer, loading...
 * folder features với những thành phần riêng của từng UI
 * Mỗi feature cx có component, pages(các trang của feature, router...), index khai báo feature
 *
 */
