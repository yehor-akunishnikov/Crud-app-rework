class FormUtilsService {
  getFormData(form) {
    const formData = new FormData(form);

    return Object.fromEntries(formData);
  }
}

export default new FormUtilsService();
