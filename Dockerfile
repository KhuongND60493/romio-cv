FROM node:22-bullseye

WORKDIR /app

# Keep npm behavior explicit and CI-like.
ENV CI=true

# Install dependencies with optional packages first, then fallback to npm install
# to avoid occasional npm optional-deps resolution issues on Linux.
COPY package.json package-lock.json ./
RUN npm ci --include=optional || npm install --include=optional

# npm may skip Rollup's platform package on Linux due to optional-deps bug.
# Ensure the correct native Rollup package exists for current container arch.
RUN case "$(uname -m)" in \
    x86_64) npm install --no-save @rollup/rollup-linux-x64-gnu ;; \
    aarch64|arm64) npm install --no-save @rollup/rollup-linux-arm64-gnu ;; \
    *) echo "Unsupported arch: $(uname -m)" && exit 1 ;; \
  esac

# Copy source and run the same build used in CI.
COPY . .
RUN npm run build

# Default command keeps container useful for ad-hoc checks.
CMD ["bash"]
