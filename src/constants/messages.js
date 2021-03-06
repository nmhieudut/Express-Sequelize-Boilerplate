export const ErrorMessage = {
  requestErrorMessage: {
    NOT_ACTIVATED: 'Tài khoản này đã bị khóa',
    EXISTED_EMAIL: 'Email này được đăng kí rồi. Vui lòng thử email khác',
    WRONG_EMAIL: 'Sai email rồi',
    WRONG_PASSWORD: 'Sai mật khẩu rồi',
    INVALID_PHONE: 'Số điện thoại không khả dụng',
    DUPLICATED_PASSWORD: 'Mật khẩu mới không trùng với mật khẩu cũ',
    NOT_FOUND: 'Không tìm thấy trang điều hướng.',
    BAD_REQUEST: 'Bạn nhập sai gì đó rồi, hãy thử nhập lại.',
    UNAUTHORIZED: 'Bạn cần đăng nhập.',
    FORBIDDEN: 'Bạn không được phép thực hiện việc này.'
  },
  responseErrorMessage: {
    CONFLICT: 'Dữ liệu không đúng, có khi nó đã có rồi.',
    INTERNAL_SERVER_ERROR: 'Lỗi server.'
  }
};
