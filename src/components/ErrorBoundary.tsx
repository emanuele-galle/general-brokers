import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // TODO: In production, send to error tracking service
    // if (process.env.NODE_ENV === 'production') {
    //   // Send to Sentry, LogRocket, etc.
    // }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaExclamationTriangle className="text-4xl text-red-600" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary-900">
              Si è verificato un errore
            </h1>

            {/* Message */}
            <p className="text-lg text-secondary-600 mb-6">
              Ci scusiamo per l&apos;inconveniente. Qualcosa non ha funzionato come previsto.
              Il nostro team è stato notificato e stiamo lavorando per risolvere il problema.
            </p>

            {/* Error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm font-mono text-red-800 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleReset}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FaRedo />
                Riprova
              </button>
              <Link
                href="/"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FaHome />
                Torna alla Home
              </Link>
            </div>

            {/* Support */}
            <div className="text-sm text-secondary-600">
              <p>
                Se il problema persiste,{' '}
                <a
                  href="tel:026698.4847"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  contattaci al 02 6698.4847
                </a>
                {' '}o{' '}
                <a
                  href="mailto:info@generalbrokers.it"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  inviaci un&apos;email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
