export const SHOW_TOAST = 'SHOW_TOAST'

export function showToast(message) {
    return {
        type: SHOW_TOAST,
        message
    }
}