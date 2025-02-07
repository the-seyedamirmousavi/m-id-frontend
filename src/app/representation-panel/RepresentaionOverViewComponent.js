import { useState } from 'react';

export default function RepresentationOverViewComponent() {
  const [copied, setCopied] = useState(false);

  return (
    <div>

      {/* داشبورد نماینده */}
      <div className="dashboard">
        <h3>داشبورد شما</h3>
        
        {/* آمار کلی */}
        <div className="stats-overview">
          <h4>عملکرد کلی</h4>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <h5>مشتریان معرفی‌شده</h5>
                <p>12</p> {/* تعداد مشتریان */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <h5>کمیسیون قابل پرداخت</h5>
                <p>۱۰۰۰۰۰ تومان</p> {/* مبلغ کمیسیون */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <h5>پرداخت‌ها</h5>
                <p>۵۰۰۰۰ تومان</p> {/* مبلغ پرداخت‌شده */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <h5>تعداد ارجاع‌ها</h5>
                <p>20</p> {/* تعداد ارجاع‌های موفق */}
              </div>
            </div>
          </div>
        </div>

        {/* گزارش مالی */}
        <div className="financial-report">
          <h4>گزارش مالی</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <h5>کمیسیون‌ها</h5>
                <p>۵۰۰۰۰ تومان - منتظر پرداخت</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h5>پرداخت‌های قبلی</h5>
                <p>۴۰۰۰۰ تومان - پرداخت‌شده</p>
              </div>
            </div>
          </div>
        </div>

        {/* آمار عملکرد */}
        <div className="performance-stats">
          <h4>آمار عملکرد</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h5>ثبت‌نام‌های موفق</h5>
                <p>10</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5>کمیسیون‌های در حال تایید</h5>
                <p>۳</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5>تعداد ارجاع‌های موفق</h5>
                <p>15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
