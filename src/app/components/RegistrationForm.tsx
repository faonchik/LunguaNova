"use client";

import { useState } from "react";
import { CheckIconComponent } from "./CheckIcon";

interface FormData {
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  promoCode: string;
}

interface ValidationErrors {
  [key: string]: string;
}

export function RegistrationForm() {
  const [selectedUserType, setSelectedUserType] = useState("adult");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    patronymic: "",
    phone: "+7 (",
    email: "",
    promoCode: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) {
      return "Поле обязательно для заполнения";
    }

    if (name === "phone") {
      // Проверяем, что номер содержит 11 цифр (включая первую 7)
      const digits = value.replace(/\D/g, "");
      if (digits.length !== 11) {
        return "Номер телефона должен содержать 11 цифр";
      }
      // Проверяем, что номер начинается с +7
      if (!value.startsWith("+7")) {
        return "Номер должен начинаться с +7";
      }
    }

    if (name === "email") {
      // Проверяем, что email содержит символ @
      if (!value.includes("@")) {
        return "Email должен содержать символ @";
      }
      // Проверяем, что после @ есть точка и домен
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Введите корректный email адрес (пример: user@example.com)";
      }
    }

    return "";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Если поле пустое, устанавливаем базовый формат
    if (value === "") {
      value = "+7 (";
      setFormData((prev) => ({ ...prev, phone: value }));
      return;
    }

    // Если пользователь пытается удалить "+7 (", предотвращаем это
    if (value.length < 4 && value.startsWith("+7 (")) {
      return;
    }

    // Удаляем все символы, кроме цифр
    const digits = value.replace(/\D/g, "");

    // Проверяем, что номер начинается с 7 (российский номер)
    if (digits.length > 0 && digits[0] !== "7") {
      // Если первый символ не 7, заменяем на 7
      value = "+7 (" + digits.substring(1, 4);
    } else {
      // Форматируем номер
      let formattedValue = "+7 (";
      if (digits.length > 1) {
        formattedValue += digits.substring(1, 4);
      }
      if (digits.length >= 4) {
        formattedValue += ") " + digits.substring(4, 7);
      }
      if (digits.length >= 7) {
        formattedValue += "-" + digits.substring(7, 9);
      }
      if (digits.length >= 9) {
        formattedValue += "-" + digits.substring(9, 11);
      }
      value = formattedValue;
    }

    // Ограничиваем длину номера (11 цифр + форматирование = 18 символов)
    if (digits.length > 11) {
      return;
    }

    setFormData((prev) => ({ ...prev, phone: value }));
    setValidationErrors((prev) => ({
      ...prev,
      phone: validateField("phone", value),
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: ValidationErrors = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "promoCode") {
        const error = validateField(key, value);
        if (error) {
          errors[key] = error;
          isValid = false;
        }
      }
    });

    setValidationErrors(errors);

    if (isValid) {
      setIsFormSubmitted(true);
      console.log("Form data:", formData);
      setFormData({
        name: "",
        surname: "",
        patronymic: "",
        phone: "+7 (",
        email: "",
        promoCode: "",
      });
    }
  };

  return (
    <section className="w-[328px] bg-white rounded-[15px] shadow-lg mt-10 p-6">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <label className="block text-[#47b6f2] text-sm font-medium mb-2">
            Кто будет учить
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSelectedUserType("adult")}
              className={`flex-1 py-2 rounded border-2 border-[#47b6f2] flex items-center justify-center ${
                selectedUserType === "adult"
                  ? "bg-[#47b6f2] text-white"
                  : "bg-white text-[#47b6f2]"
              } transition-colors`}
              aria-pressed={selectedUserType === "adult"}
            >
              ВЗРОСЛЫЙ
            </button>
            <button
              type="button"
              onClick={() => setSelectedUserType("child")}
              className={`flex-1 py-2 rounded border-2 border-[#47b6f2] flex items-center justify-center ${
                selectedUserType === "child"
                  ? "bg-[#47b6f2] text-white"
                  : "bg-white text-[#47b6f2]"
              } transition-colors`}
              aria-pressed={selectedUserType === "child"}
            >
              РЕБЁНОК
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block text-xs font-semibold mb-1 ${
              validationErrors.name ? "text-red-500" : "text-[#d9d9d9]"
            }`}
          >
            ИМЯ
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full h-[30px] rounded border-2 px-3 ${
                validationErrors.name
                  ? "border-red-500"
                  : formData.name
                  ? "border-[#64D224]"
                  : "border-[#47b6f2]"
              } focus:outline-none focus:ring-1 focus:ring-[#47b6f2]`}
            />
            {formData.name && !validationErrors.name && (
              <CheckIconComponent className="absolute right-3 top-2 text-[#64D224]" />
            )}
          </div>
          {validationErrors.name && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="surname"
            className={`block text-xs font-semibold mb-1 ${
              validationErrors.surname ? "text-red-500" : "text-[#d9d9d9]"
            }`}
          >
            ФАМИЛИЯ
          </label>
          <div className="relative">
            <input
              id="surname"
              name="surname"
              type="text"
              value={formData.surname}
              onChange={handleInputChange}
              className={`w-full h-[30px] rounded border-2 px-3 ${
                validationErrors.surname
                  ? "border-red-500"
                  : formData.surname
                  ? "border-[#64D224]"
                  : "border-[#47b6f2]"
              } focus:outline-none focus:ring-1 focus:ring-[#47b6f2]`}
            />
            {formData.surname && !validationErrors.surname && (
              <CheckIconComponent className="absolute right-3 top-2 text-[#64D224]" />
            )}
          </div>
          {validationErrors.surname && (
            <p className="text-red-500 text-xs mt-1">
              {validationErrors.surname}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="patronymic"
            className={`block text-xs font-semibold mb-1 ${
              validationErrors.patronymic ? "text-red-500" : "text-[#d9d9d9]"
            }`}
          >
            ОТЧЕСТВО
          </label>
          <div className="relative">
            <input
              id="patronymic"
              name="patronymic"
              type="text"
              value={formData.patronymic}
              onChange={handleInputChange}
              className={`w-full h-[30px] rounded border-2 px-3 ${
                validationErrors.patronymic
                  ? "border-red-500"
                  : formData.patronymic
                  ? "border-[#64D224]"
                  : "border-[#47b6f2]"
              } focus:outline-none focus:ring-1 focus:ring-[#47b6f2]`}
            />
            {formData.patronymic && !validationErrors.patronymic && (
              <CheckIconComponent className="absolute right-3 top-2 text-[#64D224]" />
            )}
          </div>
          {validationErrors.patronymic && (
            <p className="text-red-500 text-xs mt-1">
              {validationErrors.patronymic}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`block text-xs font-semibold mb-1 ${
              validationErrors.phone ? "text-red-500" : "text-[#d9d9d9]"
            }`}
          >
            ТЕЛЕФОН
          </label>
          <div className="relative">
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+7 (999) 999-99-99"
              className={`w-full h-[30px] rounded border-2 px-3 ${
                validationErrors.phone
                  ? "border-red-500"
                  : formData.phone.length > 4
                  ? "border-[#64D224]"
                  : "border-[#47b6f2]"
              } focus:outline-none focus:ring-1 focus:ring-[#47b6f2]`}
            />
            {formData.phone.length > 4 && !validationErrors.phone && (
              <CheckIconComponent className="absolute right-3 top-2 text-[#64D224]" />
            )}
          </div>
          {validationErrors.phone && (
            <p className="text-red-500 text-xs mt-1">
              {validationErrors.phone}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block text-xs font-semibold mb-1 ${
              validationErrors.email ? "text-red-500" : "text-[#d9d9d9]"
            }`}
          >
            EMAIL
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full h-[30px] rounded border-2 px-3 ${
                validationErrors.email
                  ? "border-red-500"
                  : formData.email
                  ? "border-[#64D224]"
                  : "border-[#47b6f2]"
              } focus:outline-none focus:ring-1 focus:ring-[#47b6f2]`}
            />
            {formData.email && !validationErrors.email && (
              <CheckIconComponent className="absolute right-3 top-2 text-[#64D224]" />
            )}
          </div>
          {validationErrors.email && (
            <p className="text-red-500 text-xs mt-1">
              {validationErrors.email}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="promoCode"
            className="block text-xs font-medium mb-1 text-[#d9d9d9]"
          >
            ПРОМОКОД (НЕОБЯЗАТЕЛЬНО)
          </label>
          <input
            id="promoCode"
            name="promoCode"
            type="text"
            value={formData.promoCode}
            onChange={handleInputChange}
            className="w-full h-[30px] rounded border-2 px-3 border-[#47b6f2] focus:outline-none focus:ring-1 focus:ring-[#47b6f2]"
          />
        </div>

        <button
          type="submit"
          className="w-full h-[30px] bg-[#47b6f2] rounded border-2 border-[#47b6f2] text-white font-semibold
                    hover:bg-[#3aa0e0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#47b6f2]"
        >
          ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
        </button>
      </form>

      {isFormSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold text-[#47b6f2] mb-4">
              Спасибо за вашу заявку!
            </h3>
            <div className="mb-4 space-y-2">
              <p>
                Мы получили ваши данные и скоро свяжемся с вами для уточнения
                деталей.
              </p>
              <p>Пробный урок будет назначен в удобное для вас время.</p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-[#64D224]">
                В подарок вы получите{" "}
                <span className="font-bold">3 бесплатных занятия</span> после
                пробного урока!
              </p>
            </div>
            <button
              onClick={() => setIsFormSubmitted(false)}
              className="w-full bg-[#47b6f2] text-white py-2 rounded hover:bg-[#3aa0e0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#47b6f2]"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
