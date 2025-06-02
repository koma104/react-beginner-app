import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // エラーログ送信など必要に応じて
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>何か問題が発生しました。</h1>;
        }
        return this.props.children;
    }
} 